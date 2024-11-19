// Submenu.tsx
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import ItensMenu from './ItensMenu';
import SubmenuComponent from './Submenu';
import { useRef, useState } from 'react';

function Menu() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (item: keyof typeof ItensMenu, index: number) => {
        setHoveredIndex(index);
        setOpenSubmenu(item);
    };

    const handleMouseLeaveMenu = () => {
        setHoveredIndex(null);
        setOpenSubmenu(null);
    };

    const handleCloseSubmenu = () => {
        setOpenSubmenu(null);
    };
    return (    
        <div className="flex flex-col">
       <div className="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-[#0064F3] text-white">
            <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-2xl">Sunbridge</span>
                <Avatar className="flex rounded-full">
                    <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                    <AvatarFallback></AvatarFallback>
                </Avatar>
                <span className="text-center p-2">Luiz Felipe da Cunha Silva</span>
            </div>
        </div>
        <div className="flex bg-blue-500 w-full h-full max-w-sm md:max-w-md lg:max-w-lg mx-auto flex-col gap-2 relative">
            <div className="pt-7">
                {Object.keys(ItensMenu).map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { buttonRefs.current[index] = el; }}
                        className={`flex items-center justify-center hover:underline cursor-pointer p-2 transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-200'}`}
                        onMouseEnter={() => handleMouseEnter(item as keyof typeof ItensMenu, index)}
                        onMouseLeave={handleMouseLeaveMenu}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={openSubmenu === item ? 'true' : 'false'}
                    >
                        {ItensMenu[item].title}
                    </div>
                ))}
            </div>
            {openSubmenu && (
                <div className="absolute left-full top-0">
                    <SubmenuComponent
                        menu={ItensMenu[openSubmenu]}
                        onClose={handleCloseSubmenu}
                        onMouseEnter={() => setOpenSubmenu(openSubmenu)}
                        onMouseLeave={handleCloseSubmenu}
                    />
                </div>
            )}
        </div>
    </div>
    );
};

export default Menu;
