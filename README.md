Sonic Sensory Lab Website
這個網站由 Publii 產生，並透過 GitHub Pages 部署。網站內容完全由 Publii 管理，使用者可以透過圖形介面編輯內容，而無需直接使用 Git 指令。所有更新都會透過 Publii 同步到 GitHub，進而由 GitHub Pages 呈現最新內容。

使用 Publii 管理內容
安裝 Publii：
下載並安裝最新版本的 Publii（適用於 Windows、macOS 或 Linux）。

建立新網站專案：
打開 Publii，點選「Create new website」，依指示輸入網站名稱、作者名稱等資訊。在此過程中，Publii 會要求您選擇一個資料夾作為專案的本地存放位置。這個資料夾即是您所有本地檔案的存放位置，例如：

Windows：C:\Users\<您的使用者名稱>\Documents\Publii\SonicSensoryLab

macOS：/Users/<您的使用者名稱>/Documents/Publii/SonicSensoryLab

內容編輯與預覽：
在 Publii 的圖形介面中，您可以輕鬆新增文章、頁面、圖片與設定 SEO 選項。使用內建的「Preview your changes」功能，即可在本地預覽網站效果。

本地檔案位置與管理
本地檔案位置：
當您建立專案時所選擇的資料夾就是所有本地檔案存放的位置。這個資料夾包含所有內容檔案、設定檔（例如 config.json）、主題檔案及資源。

如何確認本地檔案存放路徑：
您可以在 Publii 的「Settings」→「Files location」中查看或變更這個資料夾位置。確保您記住此路徑，方便日後備份與協作使用。

部署到 GitHub Pages
建立 GitHub 儲存庫：
登入 GitHub，建立一個新儲存庫，例如 zonesound/sonicsensorylab，並設定為 Public（免費方案僅支援公開儲存庫）。

在 Publii 中設定 Server：
在 Publii 主介面左側選單中，點選 Server。選擇 GitHub Pages 作為發佈類型，並填入以下資訊：

Domain: yourusername.github.io/sonicsensorylab
（例如：如果 GitHub 帳號是 zonesound，則填寫 zonesound.github.io/sonicsensorylab）

Username/Organization: 您的 GitHub 帳號（例如：zonesound）

Repository: 您建立的儲存庫名稱（例如：sonicsensorylab）

Branch: 主分支名稱（例如：main）

Token: 將您生成的 GitHub Personal Access Token（Classic，勾選了 repo 權限）貼入此欄位

測試連線與同步：
在 Publii 中點擊 Test Connection，確認連線成功後，再點選 Sync your website。Publii 會將本地檔案推送到 GitHub Pages。請注意，第一次同步可能需要幾分鐘，GitHub Pages 的更新也可能有短暫延遲。

協作管理
邀請協作者：
在 GitHub 儲存庫設定中，將需要共同管理內容的團隊成員加入為 Collaborator。這樣，他們就可以使用自己的 GitHub 帳號進行同步與更新。

協作者如何使用 Publii：
協作者可以從 Publii 的 Tools → Backup website 匯出網站備份，或由您提供備份檔。協作者在自己的 Publii 中選擇 Install from Backup，就可以取得最新的網站內容與設定，並進行後續修改與同步。

常見問題
如何知道本地檔案存放位置？
您在建立專案時選定的資料夾就是本地檔案的儲存位置。您可在 Publii 的「Settings」→「Files location」中確認與修改此路徑。

部署後網站未更新？
請檢查 GitHub 儲存庫的 commit 紀錄，確認 Publii 同步是否成功。GitHub Pages 的更新有時會有短暫延遲，請稍候再檢查。

多人協作衝突怎麼辦？
建議協作者在編輯前先同步最新版本，修改完後再統一發布。保持良好的團隊溝通，並定期備份網站內容。

