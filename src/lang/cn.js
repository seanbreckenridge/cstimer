var OK_LANG = '确定';
var CANCEL_LANG = '取消';
var RESET_LANG = '重置';
var ABOUT_LANG = '关于';
var ZOOM_LANG = '缩放';
var BUTTON_TIME_LIST = '成绩<br>列表';
var BUTTON_OPTIONS = '设置';
var BUTTON_EXPORT = '导出';
var BUTTON_DONATE = '捐赠';
var PROPERTY_USEINS = '使用WCA观察';
var PROPERTY_VOICEINS = 'WCA观察语音提示：';
var PROPERTY_VOICEINS_STR = '无|男声|女声';
var PROPERTY_USECFM = '确认成绩有效性(OK/+2/DNF)';
var PROPERTY_PHASES = '多阶段测速：';
var PROPERTY_TIMERSIZE = '计时器大小：';
var CFMDIV_CURTIME = '当前时间为:';
var PROPERTY_USEMILLI = '显示到0.001秒';
var PROPERTY_SMALLADP = '小数点后使用小字体';
var PROPERTY_SCRSIZE = '打乱字体大小：';
var PROPERTY_SCRMONO = '等宽字体打乱';
var PROPERTY_SCRLIM = '限制打乱区的高度';
var PROPERTY_SCRALIGN = '打乱区对齐方式：';
var PROPERTY_SCRALIGN_STR = '居中|左对齐|右对齐';
var EXPORT_DATAEXPORT = '数据导入导出';
var EXPORT_TOFILE = '导出到文件';
var EXPORT_FROMFILE = '从文件导入';
var EXPORT_TOSERV = '导出到服务器';
var EXPORT_FROMSERV = '从服务器导入';
var EXPORT_USERID = '请输入帐号（限字母或数字）：';
var EXPORT_INVID = '帐号名只能包含字母或数字！';
var EXPORT_ERROR = '出错了，我也想知道为什么……';
var EXPORT_NODATA = '此帐号还没有上传数据';
var EXPORT_UPLOADED = '上传成功';
var BUTTON_SCRAMBLE = '打乱<br>公式';
var BUTTON_TOOLS = '工具';
var IMAGE_UNAVAILABLE = '不支持此打乱类型';
var TOOLS_SELECTFUNC = '选择功能：';
var TOOLS_CROSS = '十字求解';
var TOOLS_EOLINE = 'EOLine求解';
var TOOLS_IMAGE = '打乱图案';
var TOOLS_STATS = '统计数据';
var TOOLS_DISTRIBUTION = '时间分布';
var TOOLS_TREND = '时间趋势';
var PROPERTY_IMGSIZE = '打乱图案大小：';
var TIMER_INSPECT = '观察';
var TIMER_SOLVE = '还原';
var PROPERTY_USEMOUSE = '启用鼠标计时';
var PROPERTY_TIMEU = '计时器更新方式：';
var PROPERTY_TIMEU_STR = '实时|0.1秒|到秒|仅观察|隐藏';
var PROPERTY_PRETIME = '开始前按住空格时间（秒）：';
var PROPERTY_ENTERING = '产生成绩通过：';
var PROPERTY_ENTERING_STR = '计时器|手动输入|stackmat|虚拟魔方';
var PROPERTY_COLOR = '选择颜色主题：';
var PROPERTY_COLORS = '字体颜色：|背景颜色：|面板颜色：|按钮颜色：|链接颜色：|Logo颜色：|Logo背景：';
var PROPERTY_VIEW = '界面风格显示为：';
var PROPERTY_VIEW_STR = '自动|手机版|桌面版';
var COLOR_EXPORT = '请保存以下字符串用于导入：';
var COLOR_IMPORT = '请输入之前导出的字符串：';
var COLOR_FAIL = '数据出错，导入失败';
var PROPERTY_FONTCOLOR_STR = '黑色|白色';
var PROPERTY_COLOR_STR = '随机切换|春意盎然|金风玉露|血腥玛丽|水墨青华|银装素裹|荷塘月色|自定义|导出……|导入……';
var PROPERTY_FONT = '选择计时器字体：';
var PROPERTY_FONT_STR = '随机数码管|常规|数码管1|数码管2|数码管3|数码管4|数码管5';
var PROPERTY_FORMAT = '时间格式：';
var PROPERTY_USEKSC = '使用键盘快捷键';
var PROPERTY_NTOOLS = '工具栏数量';
var PROPERTY_AHIDE = '计时过程中隐藏所有元素';
var SCRAMBLE_LAST = '上一条';
var SCRAMBLE_NEXT = '下一条';
var SCRAMBLE_SCRAMBLE = '打乱公式';
var SCRAMBLE_LENGTH = '长度';
var SCRAMBLE_INPUT = '输入打乱公式';
var scrdata = [
	['WCA', [
		['三阶速拧', "333", 0],
		['四阶速拧', "444wca", -40],
		['五阶速拧', "555wca", -60],
		['二阶速拧', "222so", 0],
		['三阶盲拧', "333ni", 0],
		['三阶单手', "333oh", 0],
		['三阶最少步', "333fm", 0],
		['三阶脚拧', "333ft", 0],
		['五魔方', "mgmp", -70],
		['金字塔', "pyrso", -10],
		['Square-1', "sqrs", 0],
		['魔表', "clkwca", 0],
		['斜转魔方', "skbso", 0],
		['六阶速拧', "666wca", -80],
		['七阶速拧', "777wca", -100],
		['四阶盲拧', "444bld", -40],
		['五阶盲拧', "555bld", -60],
		['三阶多盲', "r3ni", 5]
	]],
	['输入', [
		['手动输入', "input", 0]
	]],
	['===WCA===', [
		['--', "blank", 0]
	]],
	['2x2x2', [
		["WCA", "222so", 0],
		['最少步', "222o", 0],
		['3-gen', "2223", 25],
		['EG', "222eg", 0],
		['EG0', "222eg0", 0],
		['EG1', "222eg1", 0],
		['EG2', "222eg2", 0]
	]],
	['3x3x3', [
		["WCA", "333", 0],
		['传统', "333o", 25],
		['傻瓜', "333noob", 25],
		['棱块训练', "edges", 0],
		['角块训练', "corners", 0],
		['顶层训练', "ll", 0],
		['zbll训练', "zbll", 0],
		['顶层角块', "cll", 0],
		['顶层棱块', "ell", 0],
		['桥式六棱', "lse", 0],
		['桥式六棱&ltM,U&gt', "lsemu", 0],
		['桥式四角', "cmll", 0],
		['F2L训练', "f2l", 0],
		['F2L单组', "lsll2", 0],
		['2GLL', "2gll", 0],
		['ZBLS', "zbls", 0],
		['ZZLL', "zzll", 0],
		['PLL', "pll", 0],
		['EOLine', "eoline", 0],
		['简单十字', 'easyc', 3]
	]],
	['4x4x4', [
		["WCA", "444wca", 40],
		['SiGN', "444", 40],
		['随机状态', "444o", 0],
		['YJ', "444yj", 40],
		['对棱训练', "4edge", 8],
		['R,r,U,u', "RrUu", 40]
	]],
	['5x5x5', [
		["WCA", "555wca", 60],
		['SiGN', "555", 60],
		['对棱训练', "5edge", 8]
	]],
	['6x6x6', [
		["WCA", "666wca", 80],
		['SiGN', "666si", 80],
		['prefix', "666p", 80],
		['suffix', "666s", 80],
		['对棱训练', "6edge", 8]
	]],
	['7x7x7', [
		["WCA", "777wca", 100],
		['SiGN', "777si", 100],
		['prefix', "777p", 100],
		['suffix', "777s", 100],
		['对棱训练', "7edge", 8]
	]],
	['魔表', [
		['jaap', "clk", 0],
		['wca', "clkwca", 0],
		['optimal', "clko", 0],
		['concise', "clkc", 0],
		['高效顺序', "clke", 0]
	]],
	['五魔方', [
		["WCA", "mgmp", 70],
		['Carrot', "mgmc", 70],
		['传统', "mgmo", 70]
	]],
	['金字塔', [
		["WCA", "pyrso", 10],
		['最少步', "pyro", 0],
		['随机步数', "pyrm", 25]
	]],
	['Square-1', [
		["WCA", "sqrs", 0],
		['ftm', "sq1h", 40],
		['ttm', "sq1t", 20]
	]],
	['Skewb', [
		["WCA", "skbso", 0],
		['U L R B', "skb", 25]
	]],
	['===其他===', [
		['--', "blank", 0]
	]],
	['15 puzzle', [
		['piece moves', "15p", 80],
		['blank moves', "15pm", 80]
	]],
	['LxMxN', [
		['1x3x3', "133", 0],
		['2x2x3', "223", 0],
		['2x3x3', "233", 25],
		['3x3x4', "334", 40],
		['3x3x5', "335", 25],
		['3x3x6', "336", 40],
		['3x3x7', "337", 40],
		['8x8x8', "888", 120],
		['9x9x9', "999", 120],
		['10x10x10', "101010", 120],
		['11x11x11', "111111", 120]
	]],
	['齿轮魔方', [
		['随机状态', "gearso", 0],
		['最少步', "gearo", 0],
		['3-gen', "gear", 10]
	]],
	['Cmetrick', [
		[' ', "cm3", 25]
	]],
	['Cmetrick Mini', [
		[' ', "cm2", 25]
	]],
	['五阶五魔', [
		['Pochmann', "giga", 300]
	]],
	['Helicopter Cube', [
		[' ', "heli", 40]
	]],
	['Redi Cube', [
		[' ', "redi", 20]
	]],
	['Pyraminx Crystal', [
		['Pochmann', "prcp", 70],
		['传统', "prco", 70]
	]],
	['Siamese Cube', [
		['1x1x3 block', "sia113", 25],
		['1x2x3 block', "sia123", 25],
		['2x2x2 block', "sia222", 25]
	]],
	['Square-2', [
		[' ', "sq2", 20]
	]],
	['Super Floppy', [
		[' ', "sfl", 25]
	]],
	['Super Square-1', [
		['twist metric', "ssq1t", 20]
	]],
	['UFO', [
		['Jaap style', "ufo", 25]
	]],
	['Other', [
		['FTO (Face-Turning Octahedron)', "fto", 25]
	]],
	['===训练===', [
		['--', "blank", 0]
	]],
	['3x3x3子集', [
		['2-generator R,U', "2gen", 25],
		['2-generator L,U', "2genl", 25],
		['Roux-generator M,U', "roux", 25],
		['3-generator F,R,U', "3gen_F", 25],
		['3-generator R,U,L', "3gen_L", 25],
		['3-generator R,r,U', "RrU", 25],
		['half turns only', "half", 25],
		['last slot + last layer (old)', "lsll", 15]
	]],
	['捆绑魔方', [
		['Bicube', "bic", 30],
		['Square-1 /,(1,0)', "bsq", 25]
	]],
	['五魔子集', [
		['2-generator R,U', "minx2g", 30],
		['last slot + last layer', "mlsll", 20]
	]],
	['连拧', [
		['N个三阶', "r3", 5],
		['2到4阶', "r234", 0],
		['2到5阶', "r2345", 0],
		['2到6阶', "r23456", 0],
		['2到7阶', "r234567", 0]
	]],
	['===213===', [
		['--', "blank", 0]
	]],
	['1x1x1', [
		['x y z', "111", 25]
	]],
	['-1x-1x-1', [
		[' ', "-1", 25]
	]],
	['1x1x2', [
		[' ', "112", 25]
	]],
	['LOL', [
		[' ', "lol", 25]
	]],
	['Derrick Eide', [
		[' ', "eide", 25]
	]]
];
var SCRAMBLE_NOOBST = [
	['上面', '下面'],
	['左面', '右面'],
	['前面', '后面']
];
var SCRAMBLE_NOOBSS = '顺时针转90度,|逆时针转90度,|转180度,';
var STATS_CFM_RESET = '确认清空该组所有数据？';
var STATS_CFM_DELSS = '确认删除该组？';
var STATS_CFM_DELMUL = '从当前位置开始删除几个成绩？';
var STATS_CFM_DELETE = '确认删除该成绩？';
var STATS_COMMENT = '注释：';
var STATS_CURROUND = '本轮统计信息';
var STATS_CURSESSION = '本组统计信息';
var STATS_AVG = '平均';
var STATS_SOLVE = '还原';
var STATS_TIME = '时间';
var STATS_SESSION = '分组';
var STATS_SESSION_NAME = '分组名称';
var STATS_STRING = '最快|当前|最慢|该统计信息由csTimer自动生成于%Y年%M月%D日|还原/总数：%d|单次时间|%mk次平均|%mk次去尾|总去尾：%v{ (σ = %sgm)}|总平均：%v|详细时间:';
var STATS_PREC = '时间分布显示精度：';
var STATS_PREC_STR = '自动|0.1s|0.2s|0.5s|1s|2s|5s|10s|20s|50s|100s';
var STATS_TYPELEN = '滚动列表%d类型|滚动列表%d长度|去尾平均|平均';
var PROPERTY_PRINTSCR = '成绩统计中显示打乱';
var PROPERTY_SUMMARY = '成绩列表前显示摘要';
var PROPERTY_IMRENAME = '新建分组时重命名';
var PROPERTY_SCR2SS = '改变打乱类型时新建分组';
var PROPERTY_SS2SCR = '改变分组时自动选择打乱类型';
var PROPERTY_SS2PHASES = '改变分组时自动设置多阶段测速';
var PROPERTY_STATAL = '统计指标：';
var PROPERTY_DELMUL = '启用批量删除';
var MODULE_NAMES = {
	"ui": '界面',
	"color": '配色',
	"timer": '计时',
	"kernel": '全局',
	"scramble": '打乱',
	"stats": '统计',
	"tools": '工具'
};
var BGIMAGE_URL = '请输入图片地址(url)';
var BGIMAGE_INVALID = '无效地址';
var BGIMAGE_OPACITY = '背景图片不透明度：';
var BGIMAGE_IMAGE = '背景图片：';
var BGIMAGE_IMAGE_STR = '无|自定义|CCT';
var SHOW_AVG_LABEL = '显示平均标签';
var TOOLS_SCRGEN = '打乱生成器';
var SCRGEN_NSCR = '打乱个数：';
var SCRGEN_PRE = '前缀：';
var SCRGEN_GEN = '生成打乱！';