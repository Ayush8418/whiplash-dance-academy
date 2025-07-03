"use client";
import * as React from "react"
import { Moon, Sun, Computer } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeButton = () => {

    const {theme, setTheme} = useTheme();
    const lightIcon = <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" color="black" />
    const darkIcon = <Moon className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    const systemIcon = <Computer className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
    function toggleTheme(){
        if(theme === "light"){
            setTheme("dark");
        }
        else if(theme === "dark"){
            setTheme("light");
        }
    }

    const [isClient, setIsClient] = React.useState(false)
  
    React.useEffect(() => {
      setIsClient(true)
    }, [])

    if(!isClient) return null;

  return (
    <div className="fixed top-8 right-8 z-50">
        <button onClick={toggleTheme} className="bg-white p-2 rounded-2xl">
            {(theme == "light")?
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" color="black" />
              : 
              (
                (theme=="dark")?
                  <Moon className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" color="black" />
                  : 
                  <Computer className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" color="black" />
              )
            }
        </button>
    </div>
  )
}

export default ThemeButton;
