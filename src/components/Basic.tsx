export interface BasicProps {
    text: string
}

const Basic: React.SFC<BasicProps> = ({ text }: BasicProps) => <button>{text}</button>;

export default Basic;