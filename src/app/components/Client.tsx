'use client';

const publicEnv = process.env.NEXT_PUBLIC_TEST;
const notPublicEnv = process.env.TEST;

export const ClientComponent = ({
    propEnv,
    globalPropEnv,
}: {
    propEnv: string | undefined;
    globalPropEnv: string | undefined;
}) => {
    return (
        <div>
            <h1>This is a Client Component</h1>
            <h2>Using process.env</h2>
            <p>
                <code>NEXT_PUBLIC_TEST</code> is {publicEnv}
            </p>
            <p>
                <code>TEST</code> is {notPublicEnv}
                <span> [when accessed directly]</span>
            </p>
            <p>
                <code>TEST</code> is {propEnv}
                <span> [when passed as a prop]</span>
            </p>
            <h2>Using global.process.env</h2>
            <p>passed as a prop</p>
            <p>
                <code>NEXT_PUBLIC_TEST</code> is {globalPropEnv}
            </p>
        </div>
    );
};
