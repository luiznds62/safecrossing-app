export const extractAddressFromMetadata = (metadata: string) => {
    const metaProps = metadata.split(',');

    const address = metaProps[0];
    const neighborhood = metaProps[1].split('-')[1].trim();
    const city = metaProps[2].split('-')[0].trim();
    const state = metaProps[2].split('-')[1].trim();
    const cep = metaProps[3].trim();
    const country = metaProps[4].trim();

    return {
        address: address,
        neighborhood: neighborhood,
        city: city,
        state: state,
        cep: cep,
        country: country
    }
};
