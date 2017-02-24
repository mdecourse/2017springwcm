var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","text":"2017Spring 機械設計工程系網際內容管理 課程倉儲: http://github.com/mdecourse/2017springwcm 課程投影片: http://mdecourse.github.io/2017springwcm 課程網誌: http://mdecourse.github.io/2017springwcm/blog","title":"About"},{"url":"./web-based-python3.html","tags":"Course","text":"網際內容管理課程利用 Brython 建立一個能夠直接在瀏覽器中執行的 Python3 程式環境, 讓使用者進行各種與機械產品開發相關的設計運算與動靜態模擬. window.onload=function(){ brython(1); } from browser import document, html container1 = document['container1'] 利用伺服器執行 Python3 程式 Jupyterhub: https://8888.kmol.info:9443 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇\"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .py Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) for1.py temp1.py ver_and_kw.py","title":"網際 Python3 程式環境"},{"url":"./2017spring-mde-wcm.html","tags":"Course","text":"2017 Spring 網際內容管理 歷年網際內容管理課程 2016 Spring 網際內容管理 2015 Spring 網際內容管理 網際內容管理課程評分標準: (一) 各分組學員是否按步就班利用網際簡報、網誌與操作影片呈現細節內容 (50%) - 各組學員根據實際完成內容自評成績後 * 老師認可百分比 (二) 各分組學員在協同過程是否互助砥礪完成既定工作任務 (分組成員互評) (20%) - 各組學員根據實際內容舉證互評成績平均, 參考系統: https://pygroup-ag100.rhcloud.com (三) 上課出席與表現 (各學員根據實際內容舉證自評成績 * 老師認可百分比) (30%) 網際內容管理課程規劃 2017 WCM 機械設計工程系網際內容管理 (五) 13:20-16:10 各週上課日期: w1 -2/24 - 請每人準備一個隨身碟, 下載 可攜程式系統 (1GB). 複習如何在單機環境與網際環境中執行基本的 Python3 程式. W1影片 w2-3/3 - CMSimfly 網際內容管理程式開發 w3-3/10 - CMSimfly 網際內容管理程式開發 w4-3/17 - CMSimfly 網際內容管理程式開發 w5-3/24 - CMSimfly 網際內容管理程式開發 w6-3/31(放假) w7-4/7 - 分組期中專案執行 w8-4/14 - 期中簡報與自評 w9-4/21 - Fossil SCM 配置與應用 w10-4/28 - Fossil SCM 配置與應用 w11-5/5 - Fossil SCM 配置與應用 w12-5/12 - Fossil SCM 配置與應用 w13-5/19 - 網際伺服器環境管理 w14-5/26 - 網際伺服器環境管理 w15-6/2 - 網際伺服器環境管理 w16-6/9 - 分組期末專案執行 w17-6/16 - 分組期末專案執行 w18-6/23 - 期末簡報與自評","title":"2017Spring 機械設計工程系網際內容管理"}]};