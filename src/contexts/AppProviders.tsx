import { composeProviders } from "@/utils/composeProviders";

const AllProviders = composeProviders(); // TODO: add providers here

export const AppProviders = ({ children} : { children: React.ReactNode}) => {
    <AllProviders> { children }</AllProviders>
}