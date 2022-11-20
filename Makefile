src = src
ifndef dest
	dest = dist
endif
closure = lib/compiler.jar
externJQ = --externs lib/jquery-1.7.js
externTwisty = --externs $(dest)/js/twisty.js
externLang = --externs $(src)/lang/en-us.js
compile = java -jar $(closure) --jscomp_off externsValidation --use_types_for_optimization --language_out ECMASCRIPT3 --charset UTF-8
advanced = -O ADVANCED
debugoff = --define='DEBUGM=false' --define='DEBUGWK=false'
timerSrc = $(addprefix $(src)/js/, \
lib/utillib.js \
lib/sha256.js \
lib/mersennetwister.js \
lib/mathlib.js \
lib/sbtree.js \
lib/sqlfile.js \
lib/tdconverter.js \
lib/lzstring.js \
lib/min2phase.js \
lib/cubeutil.js \
lib/json.min.js \
kernel.js \
export.js \
logohint.js \
timer.js \
scramble/scramble.js \
scramble/megascramble.js \
scramble/scramble_333_edit.js \
scramble/scramble_444.js \
scramble/scramble_sq1_new.js \
scramble/pyraminx.js \
scramble/skewb.js \
scramble/2x2x2.js \
scramble/gearcube.js \
scramble/1x3x3.js \
scramble/2x2x3.js \
scramble/clock.js \
scramble/333lse.js \
scramble/utilscramble.js \
lib/storage.js \
stats/timestat.js \
stats/stats.js \
tools/tools.js \
tools/image.js \
tools/cross.js \
tools/eoline.js \
tools/roux1.js \
tools/gsolver.js \
tools/bluetoothutil.js \
tools/insertionfinder.js \
tools/metronome.js \
tools/onlinecomp.js \
tools/syncseed.js \
tools/algsearch.js \
shortcut.js \
help.js \
stackmat.js \
tools/stackmatutil.js \
bluetooth.js \
worker.js)

cache = $(addprefix $(dest)/, \
timer.php \
js/cstimer.js \
js/twisty.js \
css/style.css) $(langJS) $(langPHP)


twistySrc = $(addprefix $(src)/js/, \
lib/threemin.js \
twisty/twisty.js \
twisty/twistynnn.js \
twisty/twistysq1.js \
twisty/twistyskb.js \
twisty/twistypyra.js \
twisty/twistyminx.js \
twisty/qcube.js)


cstimer = $(dest)/js/cstimer.js
twisty = $(dest)/js/twisty.js
css = $(addprefix $(dest)/css/, $(shell ls $(src)/css))
langJS = $(addprefix $(dest)/lang/, $(shell ls $(src)/lang/ | grep .*\.js))
langPHP = $(addprefix $(dest)/lang/, $(shell ls $(src)/lang/ | grep .*\.php))

all: $(cstimer) $(twisty) $(css) $(langJS) $(langPHP) $(dest)/cache.manifest $(dest)/sw.js

clean:
	rm -f $(cstimer) $(twisty) $(css) $(langJS) $(langPHP)

local: all
	php $(dest)/timer.php | sed "s/ manifest=\"cache\.manifest\"//g" > $(dest)/local/timer.html
	cp $(dest)/js/cstimer.js $(dest)/local/js/cstimer.js
	cp $(dest)/js/twisty.js $(dest)/local/js/twisty.js
	cp $(dest)/css/style.css $(dest)/local/css/style.css

server:
	php -S 0.0.0.0:4633 -t ./src

$(cstimer): $(twisty) $(timerSrc)
	@echo $@
	@$(compile) $(debugoff) $(externJQ) $(externTwisty) $(externLang) $(timerSrc) --js_output_file $(cstimer)

$(twisty): $(twistySrc)
	@echo $@
	@$(compile) $(twistySrc) --js_output_file $(twisty)

$(css): $(dest)/css/%.css: $(src)/css/%.css
	@echo $@
	@cp $< $@

$(langPHP): $(dest)/lang/%: $(src)/lang/%
	@echo $@
	@cp $< $@

$(langJS): $(dest)/lang/%: $(src)/lang/%
	@echo $@
	@$(compile) $< --js_output_file $@

$(dest)/cache.manifest: $(cache)
	@echo $@
	@sed -i '$$d' $@
	@echo -n \# MD5= >> $@
	@cat $(cache) | md5sum | awk '{print $$1}' >> $@

$(dest)/sw.js: $(cache)
	@echo $@
	@sed -i '$$d' $@
	@echo 'var CACHE_NAME = "cstimer_cache_'`cat $(cache) | md5sum | awk '{print $$1}'`'";' >> $@

.PHONY: all
