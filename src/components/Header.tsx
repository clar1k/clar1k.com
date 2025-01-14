import Link from "next/link";
const asciiArt = `       _           __ _    
      | |         /_ | |   
   ___| | __ _ _ __| | | __
  / __| |/ _\` | '__| | |/ /
 | (__| | (_| | |  | |   < 
  \\___|_|\\__,_|_|  |_|_|\\_\\
`;

function Header() {
  return (
    <header className="border-b border-theme-secondary bg-theme-dark p-4 text-theme-light">
      <div className="container mx-auto flex items-center justify-between">
        <pre className="font-mono text-xs text-theme-secondary">{asciiArt}</pre>
        <nav>
          <ul className="flex gap-6 font-mono">
            <li>
              <Link
                href="#about"
                className="text-lg hover:text-theme-secondary"
              >
                [ About ]
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-lg hover:text-theme-secondary"
              >
                [ Skills ]
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-lg hover:text-theme-secondary"
              >
                [ Projects ]
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="text-lg hover:text-theme-secondary"
              >
                [ Articles ]
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-lg hover:text-theme-secondary"
              >
                [ Contact ]
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
