import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h1>Rowan Feland</h1>
            <Link href="https://github.com/sportyskater69/cprg306-assignments">
                GitHub: sportyskater69/cprg306-assignments
            </Link>
            <div>
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}