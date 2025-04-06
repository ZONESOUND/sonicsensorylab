Publii + GitHub Pages 多人協作網站操作指南

本指南介紹如何利用 Publii 建立與管理 Sonic Sensory Lab 網站，並透過 GitHub Pages 進行部署與版本控制。指南同時說明如何在本地進行內容編輯、同步（更新）、以及多人協作時的操作流程和注意事項。

⸻

1. 系統概述
	•	Publii：一款桌面靜態網站生成器，可離線編輯網站內容，採用所見即所得介面，不需要撰寫程式碼。
	•	GitHub Pages：免費靜態網站托管服務，透過 Git 儲存庫進行部署，每次發佈都會生成靜態檔案。
	•	協作模式：各協作者在各自的電腦上使用 Publii 編輯內容，再透過 Publii 的同步功能將更改推送到 GitHub；團隊需遵循「先拉後推」原則。

⸻

2. 安裝與初始設定

2.1 下載與安裝 Publii
	•	下載：前往 Publii 官網 下載適用作業系統的版本。
Download Publii for your operating system.
	•	安裝：根據系統提示完成安裝（例如 Windows 安裝.exe，macOS 拖入 Applications 資料夾）。
Install Publii by following the installer instructions.

2.2 建立新網站專案
	1.	打開 Publii，點選 Create new website。
Open Publii and click Create new website.
	2.	輸入網站名稱、作者名稱等基本資訊。選擇一個本地資料夾作為網站專案存放位置，此資料夾即為您的本地檔案庫。
範例：
	•	Windows：C:\Users\<您的使用者名稱>\Documents\Publii\SonicSensoryLab
	•	macOS：/Users/<您的使用者名稱>/Documents/Publii/SonicSensoryLab
Enter your website’s name, author, and select a local folder where your website files will be stored.
	3.	完成建立後，Publii 會生成網站檔案與設定，並進入主介面。
After creation, Publii will generate the site files and open the main interface.

⸻

3. 內容編輯與管理

3.1 編輯文章與頁面
	•	新增文章 (Post)：
在左側選單中點選 Posts，然後點擊 Add new post。使用所見即所得的編輯器撰寫文章內容。
To add a new post, click Posts > Add new post and use the editor to compose your content.
	•	新增頁面 (Page)：
點選 Pages，然後點擊 Add new page。頁面適合放置固定內容，如「關於我們」或「團隊介紹」。
To add a new page, click Pages > Add new page for static content such as About or Team pages.
	•	自訂內容：
利用 Publii 提供的區塊編輯功能，插入圖片、影片、標籤與其他多媒體內容。
Use the block editor to insert images, videos, tags, and other multimedia elements.

3.2 預覽與本地測試
	•	本地預覽 (Preview)：
點選右下角的 Preview your changes 按鈕，即可在本地瀏覽器預覽網站效果。
Click Preview your changes to view your site locally in a browser.

3.3 同步 (Sync) 操作

Publii 同步功能會將本地修改的內容生成靜態檔案，並推送到 GitHub 儲存庫。
	•	基本操作：
每次修改完成後，請務必點選 Sync your website。這個操作大致相當於 Git 的 pull 與 push 操作。
After editing, click Sync your website to generate static files and push them to GitHub. This is similar to running git pull and git push in the command line.
	•	操作流程（中英對照）：
	•	Pull (拉取更新)：
在開始編輯前，先點選 Sync，以拉取遠端最新的更新。
Before editing, click Sync to perform a pull and update your local files.
	•	Edit (編輯內容)：
使用 Publii 進行內容撰寫與修改。
Edit your content using Publii’s editor.
	•	Preview (預覽)：
點選 Preview your changes 查看本地預覽效果。
Preview your changes to see how the site looks.
	•	Push (推送更新)：
修改確認無誤後，再次點選 Sync your website 以推送最新內容到 GitHub。
Finally, click Sync your website again to push your changes to GitHub.
	•	注意事項：
由於 Publii 是離線工具，遠端變更不會自動合併進入您的本地資料庫，請在每次編輯前先同步拉取最新版本，避免多人同時修改導致覆蓋。
Note: Since Publii is an offline editor, always perform a sync (pull) before editing to avoid conflicts when multiple collaborators are updating content.

⸻

4. 部署到 GitHub Pages

4.1 GitHub 儲存庫與 Pages 設定
	1.	建立儲存庫：
登入 GitHub，點選右上角「＋」 → New repository，命名為 sonicsensorylab，並設定為 Public。
Log into GitHub, click the “+” icon, select New repository, name it sonicsensorylab, and set it to Public.
	2.	啟用 GitHub Pages：
進入儲存庫 Settings → Pages，在 Source 區塊中選擇分支（例如 main）及目錄（通常選擇根目錄），保存後 GitHub 會生成發布網址：
https://<username>.github.io/sonicsensorylab/
Go to the repository’s Settings > Pages and select the source branch (e.g., main) and directory (root). Save and GitHub Pages will be enabled at https://<username>.github.io/sonicsensorylab/.

4.2 在 Publii 中設定同步伺服器
	1.	開啟 Publii Server 設定：
在 Publii 主介面左側選單點選 Server。
	2.	選擇 GitHub Pages 作為 Server 類型，並填入以下資訊：
	•	Domain：例如 yourusername.github.io/sonicsensorylab
	•	Username/Organization：您的 GitHub 帳號（例如：zonesound）
	•	Repository：sonicsensorylab
	•	Branch：main
	•	Token：貼入您事先生成的 Classic Personal Access Token（需包含 repo 權限）
Set up the Server in Publii by choosing GitHub Pages as the server type, and fill in Domain, Username, Repository, Branch, and Token (your GitHub personal access token).
	3.	點選 Test Connection 測試連線，確保 Publii 可以連線到 GitHub 儲存庫。
	4.	點選 Sync your website 進行首次同步，將本地內容推送到 GitHub Pages。
Test the connection and then click Sync your website to push your site to GitHub Pages.

⸻

5. 多人協作與內容同步

5.1 協作者邀請
	1.	在 GitHub 儲存庫中邀請協作者：
進入儲存庫 Settings → Manage access，點選 Invite a collaborator 並輸入協作者的 GitHub 使用者名稱。
Invite collaborators by going to Settings > Manage access in your GitHub repository and inviting team members.
	2.	協作者接受邀請後，將能擁有推送權限。

5.2 協作更新流程
	•	工作流程：
	•	Step 1: Pull 最新內容 (git pull)
在開始編輯前，協作者應點選 Publii 的 Sync your website 來拉取遠端更新。
Before editing, each collaborator should click Sync your website (similar to running git pull) to get the latest updates.
	•	Step 2: 編輯內容 (Edit content)
使用 Publii 的圖形介面撰寫或修改文章、頁面等內容。
Edit your content in Publii’s GUI.
	•	Step 3: 預覽變更 (Preview changes)
點選 Preview your changes 以確認效果。
Preview your changes to verify the layout and content.
	•	Step 4: 推送更新 (Push changes)
編輯完成後，再次點選 Sync your website，此操作會自動 commit 並推送更新到 GitHub。
After editing, click Sync your website to commit and push your changes (similar to git commit and git push).
	•	Git 指令對照 (Optional)：
如果您熟悉 Git，這些操作可參考下列基本命令：
	•	git pull （拉取最新更新）– 拉取遠端變更至本地
	•	git add . （添加所有修改）– 將更改標記為提交
	•	git commit -m "Update content" （提交更改）– 以訊息提交更改
	•	git push （推送更改）– 將本地提交推送到遠端儲存庫
這些命令對應 Publii 的同步流程，但 Publii 會以圖形介面自動處理這些細節。

5.3 注意事項
	•	避免同時編輯同一內容檔案：
建議各協作者在編輯前先同步，確保本地資料與遠端最新版本一致，以免覆蓋他人更新。
Avoid editing the same file simultaneously; always sync before starting to edit.
	•	定期備份：
Publii 提供 Tools → Backup website 功能，建議定期備份網站資料以防資料意外丟失。
Regularly backup your site using Publii’s Backup feature.

⸻

6. 常見問題與解決
	•	如何知道本地檔案存放位置？
當您建立專案時，Publii 會要求選擇一個資料夾，此資料夾即為本地檔案存放位置。您可以在 Settings > Files location 中查看或修改。
The folder you selected during project creation is where all local files are stored. Check or change it in Settings > Files location.
	•	同步失敗或內容未更新？
請先檢查 GitHub 儲存庫的 commit 記錄，確認同步是否成功。若出現版本衝突，請先溝通協作，再採取手動合併的方式解決。
If sync fails or content is outdated, check the commit history on GitHub and ensure proper coordination among collaborators.
	•	如何更新個人訪問令牌？
若 Token 過期或權限不足，請重新生成 Classic Token，並在 Publii Server 設定中更新。
If your token expires or lacks permissions, generate a new Classic Token with the repo scope and update it in Publii.

⸻

結語

利用 Publii 搭配 GitHub Pages，您可以以圖形化介面輕鬆建立並管理 Sonic Sensory Lab 官方網站。此方案完全免費，且支援多位協作者共同維護內容。只要遵循「先拉後推」的同步流程，並定期備份與協調編輯，就能確保網站內容穩定更新。

希望這份詳細且中英對照的指南能為您與團隊提供便利，讓架站與協作管理變得清晰易懂。若有進一步問題，歡迎隨時查閱相關文件或與團隊討論。

⸻

參考資料：
	•	Publii 官方文件與主題市集
	•	GitHub Pages 部署指南
	•	Publii 協作與同步相關討論與使用者經驗分享
	•	常用 Git 指令參考（git-scm.com）
