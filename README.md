# Publii + GitHub Pages 多人協作網站操作指南

本指南介紹如何利用 Publii 建立與管理 Sonic Sensory Lab 官方網站，並透過 GitHub Pages 進行部署與版本控制。內容涵蓋本地編輯、同步更新及多人協作的操作流程，並提供中英對照說明。

---

## 1. 系統概述

- **Publii**：一款桌面靜態網站生成器，可離線編輯網站內容，採用所見即所得介面，不需要撰寫程式碼。  
  *Publii: A desktop static site generator that lets you edit your website offline using a WYSIWYG interface without coding.*

- **GitHub Pages**：免費靜態網站托管服務，透過 Git 儲存庫部署網站，每次發佈都會生成最新的靜態檔案。  
  *GitHub Pages: A free hosting service for static websites, where your site is deployed from a Git repository.*

- **多人協作模式**：各協作者在各自電腦上使用 Publii 編輯內容，再透過同步功能將更改推送到 GitHub。請遵循「先拉（pull）後推（push）」原則。  
  *Collaboration: Team members edit content locally in Publii and sync changes to GitHub, following a pull-then-push workflow.*

---

## 2. 安裝與初始設定

### 2.1 下載與安裝 Publii

- **下載**  
  前往 [Publii 官網](https://getpublii.com/) 下載適用您作業系統的版本。  
  *Download Publii for your operating system.*

- **安裝**  
  根據系統提示完成安裝（例如 Windows 執行 .exe 安裝程式，macOS 拖入 Applications 資料夾）。  
  *Install Publii by following the installer instructions.*

### 2.2 建立新網站專案

1. **打開 Publii，點選 Create new website**  
   *Open Publii and click **Create new website**.*

2. **輸入網站名稱、作者名稱**，並選擇一個本地資料夾作為網站專案存放位置。  
   **範例：**  
   - Windows: `C:\Users\<YourUsername>\Documents\Publii\SonicSensoryLab`  
   - macOS: `/Users/<YourUsername>/Documents/Publii/SonicSensoryLab`  
   *Enter your website’s name, author, and select a local folder where your website files will be stored.*

3. **完成建立後**，Publii 會生成網站檔案與設定，並進入主介面。  
   *After creation, Publii will generate the site files and open the main interface.*

---

## 3. 內容編輯與管理

### 3.1 編輯文章與頁面

- **新增文章 (Post)：**  
  在左側選單中點選 **Posts**，然後點擊 **Add new post**，使用所見即所得編輯器撰寫文章內容。  
  *To add a new post, click **Posts > Add new post** and use the editor to compose your content.*

- **新增頁面 (Page)：**  
  點選 **Pages**，然後點擊 **Add new page**，適用於放置「關於我們」或「團隊介紹」等固定內容。  
  *To add a new page, click **Pages > Add new page** for static content such as About or Team pages.*

- **自訂內容：**  
  利用 Publii 的區塊編輯功能，插入圖片、影片、標籤及其他多媒體內容。  
  *Use the block editor to insert images, videos, tags, and other multimedia elements.*

### 3.2 預覽與本地測試

- **本地預覽 (Preview)：**  
  點選右下角的 **Preview your changes** 按鈕，在本地瀏覽器預覽網站效果。  
  *Click **Preview your changes** to view your site locally in a browser.*

### 3.3 同步 (Sync) 操作

Publii 同步功能將本地修改的內容生成靜態檔案，並推送到 GitHub 儲存庫。

- **基本操作：**  
  每次修改完成後，請點選 **Sync your website**。這一操作類似於 Git 的 pull 和 push。  
  *After editing, click **Sync your website** to generate static files and push them to GitHub. This is similar to running `git pull` and `git push`.*

- **操作流程 (中英對照)：**
  - **Pull (拉取更新)：**  
    在開始編輯前，點選 **Sync your website** 以拉取遠端最新內容。  
    *Before editing, click Sync to perform a pull and update your local files.*
  
  - **Edit (編輯內容)：**  
    使用 Publii 編輯您的內容。  
    *Edit your content using Publii’s editor.*
  
  - **Preview (預覽)：**  
    點選 **Preview your changes** 以檢視效果。  
    *Preview your changes to see how the site looks.*
  
  - **Push (推送更新)：**  
    修改確認後，再次點選 **Sync your website** 推送最新內容到 GitHub。  
    *Finally, click Sync your website again to push your changes to GitHub.*

- **注意事項：**  
  因為 Publii 是離線工具，遠端變更不會自動合併至本地。每次編輯前請先同步最新版本以避免衝突。  
  *Note: Since Publii is an offline editor, always sync (pull) before editing to avoid conflicts.*

---

## 4. 部署到 GitHub Pages

### 4.1 建立 GitHub 儲存庫與 Pages 設定

1. **建立儲存庫：**  
   登入 GitHub，點選右上角「＋」→ **New repository**，命名為 `sonicsensorylab`，並設定為 Public。  
   *Log into GitHub, click the “+” icon, select **New repository**, name it `sonicsensorylab`, and set it to Public.*

2. **啟用 GitHub Pages：**  
   進入儲存庫的 **Settings → Pages**，在 Source 區塊中選擇分支（例如 `main`）及目錄（通常選擇根目錄），保存後 GitHub Pages 會生成發布網址：  
   `https://<username>.github.io/sonicsensorylab/`  
   *Go to the repository’s Settings > Pages, select the source branch (e.g., main) and directory (root), then save. Your site will be available at `https://<username>.github.io/sonicsensorylab/`.*

### 4.2 在 Publii 中設定同步伺服器

1. **打開 Publii 的 Server 設定：**  
   在左側選單中點選 **Server**。

2. **選擇 GitHub Pages 作為 Server 類型**，並填入以下資訊：
   - **Domain**：例如 `yourusername.github.io/sonicsensorylab`  
   - **Username/Organization**：您的 GitHub 帳號（例如：zonesound）  
   - **Repository**：`sonicsensorylab`  
   - **Branch**：`main`  
   - **Token**：貼入您生成的 Classic Personal Access Token（必須包含 `repo` 權限）  
   *Set up the server by choosing GitHub Pages and fill in Domain, Username, Repository, Branch, and Token.*

3. **點選 Test Connection 測試連線**，確認 Publii 可連線到儲存庫。

4. **點選 Sync your website 進行首次同步**，將本地內容推送到 GitHub Pages。  
   *Test the connection and then click **Sync your website** to push your site to GitHub Pages.*

---

## 5. 多人協作與內容同步

### 5.1 邀請協作者

1. **在 GitHub 儲存庫中邀請協作者：**  
   進入儲存庫 **Settings → Manage access**，點選 **Invite a collaborator**，輸入協作者的 GitHub 使用者名稱。  
   *Invite collaborators by going to Settings > Manage access in your GitHub repository.*

2. 協作者接受邀請後，即獲得寫入權限。  
   *Once collaborators accept, they will have push permissions.*

### 5.2 協作更新流程

- **工作流程：**
  1. **Pull (拉取更新)：**  
     編輯前，點選 Publii 的 **Sync your website** 以拉取最新變更。  
     *Before editing, click **Sync your website** to pull the latest changes (like `git pull`).*
  
  2. **Edit (編輯內容)：**  
     使用 Publii 的圖形介面編輯文章或頁面。  
     *Edit your content in Publii’s GUI.*
  
  3. **Preview (預覽)：**  
     點選 **Preview your changes** 以確認修改效果。  
     *Preview your changes to check the layout and content.*
  
  4. **Push (推送更新)：**  
     修改完成後，再次點選 **Sync your website**，這會自動 commit 並 push 更新到 GitHub。  
     *After editing, click **Sync your website** again to commit and push your changes (similar to `git commit` and `git push`).*
  
- **Git 指令對照（Optional）：**
  - `git pull` – 拉取最新更新  
  - `git add .` – 添加所有修改  
  - `git commit -m "Update content"` – 提交更改  
  - `git push` – 推送到遠端儲存庫

- **注意事項：**  
  避免多人同時編輯同一檔案，並在編輯前先同步最新版本以避免覆蓋。  
  *Avoid editing the same file simultaneously; always sync before editing.*

### 5.3 備份與衝突解決

- **定期備份：**  
  使用 Publii 的 **Tools → Backup website** 功能定期備份站點資料。  
  *Regularly backup your site using the Backup website feature.*
- **衝突解決：**  
  若發生版本衝突，請參照 GitHub commit 歷史手動合併更改。  
  *If conflicts occur, review the Git commit history and manually resolve them.*

---

## 6. 常見問題

- **本地檔案位置：**  
  您在建立專案時選定的資料夾即為所有本地檔案存放位置，可在 Publii 的 **Settings > Files location** 查看或修改。  
  *The folder chosen during project creation is where all local files are stored. Check it in Settings > Files location.*

- **同步失敗或內容未更新：**  
  檢查 GitHub 儲存庫 commit 記錄，確認同步是否成功；協作時請遵循「先拉後推」的原則。  
  *If sync fails or content is outdated, check the commit history on GitHub and ensure proper coordination.*

- **更新個人訪問令牌：**  
  若 token 過期或權限不足，重新生成 Classic Token（勾選 `repo` 權限），並在 Publii Server 設定中更新。  
  *If your token expires or lacks permissions, generate a new Classic Token with `repo` scope and update it in Publii.*

---

## 結語

利用 Publii 與 GitHub Pages，您可以免費建立一個專業且具有當代藝術風格的 Sonic Sensory Lab 官方網站。透過 Publii 的圖形介面，所有協作者（3～5 人）皆能輕鬆編輯、同步與發布內容，而 GitHub Pages 則提供穩定免費的靜態托管服務。請依照本指南操作，並定期備份與溝通協調，確保多人協作順暢進行。

希望這份詳細指南能幫助您與團隊高效管理並持續更新網站內容！

---

*參考資料：*  
- [Publii 官方文件](https://getpublii.com/documentation/)  
- [GitHub Pages 部署指南](https://pages.github.com/)  
- [常用 Git 指令參考](https://git-scm.com/)  
- Publii 社群討論與使用者經驗分享
