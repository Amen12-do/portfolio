Add-Type -TypeDefinition @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Data.Pdf;
using Windows.Storage;
using Windows.Storage.Streams;

public class PdfConverter
{
    public static async Task ConvertPageToPng(string pdfPath, string pngPath)
    {
        StorageFile pdfFile = await StorageFile.GetFileFromPathAsync(pdfPath);
        PdfDocument pdfDoc = await PdfDocument.LoadFromFileAsync(pdfFile);
        if (pdfDoc.PageCount > 0)
        {
            using (PdfPage page = pdfDoc.GetPage(0))
            {
                string dir = Path.GetDirectoryName(pngPath);
                string fileName = Path.GetFileName(pngPath);
                StorageFolder folder = await StorageFolder.GetFolderFromPathAsync(dir);
                StorageFile outFile = await folder.CreateFileAsync(fileName, CreationCollisionOption.ReplaceExisting);
                using (IRandomAccessStream stream = await outFile.OpenAsync(FileAccessMode.ReadWrite))
                {
                    await page.RenderToStreamAsync(stream);
                    await stream.FlushAsync();
                }
            }
        }
    }
}
"@ -ReferencedAssemblies @(
    "System.Runtime.WindowsRuntime",
    "C:\Windows\System32\WinMetadata\Windows.Foundation.winmd",
    "C:\Windows\System32\WinMetadata\Windows.Storage.winmd",
    "C:\Windows\System32\WinMetadata\Windows.Data.winmd"
)

$items = @(
    @{
        Src = "C:\Users\msi\.gemini\antigravity\brain\0b7afdcf-1de1-4d30-b79d-8f48ace04f10\.user_uploaded\media_1791513465979_8f8f4332.pdf"
        Dst = "C:\redmine\portfelio\public\certificates\quality-work-with-agility.png"
    },
    @{
        Src = "C:\Users\msi\.gemini\antigravity\brain\0b7afdcf-1de1-4d30-b79d-8f48ace04f10\.user_uploaded\media_1791513466014_d8275f47.pdf"
        Dst = "C:\redmine\portfelio\public\certificates\intro-data-studio.png"
    },
    @{
        Src = "C:\Users\msi\.gemini\antigravity\brain\0b7afdcf-1de1-4d30-b79d-8f48ace04f10\.user_uploaded\media_1791513466019_870b2eee.pdf"
        Dst = "C:\redmine\portfelio\public\certificates\google-analytics-power-users.png"
    },
    @{
        Src = "C:\Users\msi\.gemini\antigravity\brain\0b7afdcf-1de1-4d30-b79d-8f48ace04f10\.user_uploaded\media_1791513466025_1bebf348.pdf"
        Dst = "C:\redmine\portfelio\public\certificates\google-analytics-beginners.png"
    }
)

foreach ($item in $items) {
    Write-Host "Rendering $($item.Src) -> $($item.Dst)..."
    [PdfConverter]::ConvertPageToPng($item.Src, $item.Dst).GetAwaiter().GetResult()
    Write-Host "Generated: $(Test-Path $item.Dst), Size: $((Get-Item $item.Dst).Length)"
}

