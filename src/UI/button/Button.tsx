
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Button = ({ children }: ContainerProps) => {
    return (
        <button className="w-full max-w-[6.875rem] h-full max-h-[2rem] px-[2rem] py-[2px] bg-[var(--gold-color)]  text-[0.75rem] rounded-md">
            <div className="max-w[2.875rem] flex items-center font-bold">
                {children}
            </div>
        </button>
    );
}

export default Button;