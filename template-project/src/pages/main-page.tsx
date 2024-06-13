import DocumentationCard from "@/components/custom/custom-documentation-card";
import { ThemeModeToggle } from "@/components/custom/theme-button";

export const MainPage = () => {
    return (
      <>
        <div className="min-h-screen min-w-screen flex flex-col">
          <main className="flex-grow flex items-center justify-left">
            <div className="text-left px-8">
              <h1 className="text-4xl font-bold mb-4">Template</h1>
              <p className="text text-muted-foreground text-700">
                Thank you for using the Template
              </p>
              <div className="mt-8">

              <DocumentationCard/>
              </div>
            </div>

            <div className="fixed top-0 right-0 m-10">
                <ThemeModeToggle/>
            </div>
          </main>
        </div>
      </>
    );
  }