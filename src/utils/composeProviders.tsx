import React from "react";

export const composeProviders = (...providers: React.FC<{ children: React.ReactNode }>[]) => {
    return providers.reduce((AccumulatedProviders, CurrentProvider) => {
        return ({ children }: { children: React.ReactNode }) => {
            return (
                <AccumulatedProviders>
                    <CurrentProvider>{children}</CurrentProvider>
                </AccumulatedProviders>
            );
        }
    }
    , ({ children }: { children: React.ReactNode}) => <>{children}</>
    );
};
