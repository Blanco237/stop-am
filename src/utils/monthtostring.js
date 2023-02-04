
const monthtostring = month => new Date(`${month + 1}/01/2032`).toLocaleString('en-US', { month: 'long' });

const getArchiveDate = (date) => {
    const d = new Date(date);
    const month = monthtostring(d.getMonth());
    const year = d.getUTCFullYear();

    const archiveDate = `${month} - ${year}`;

    return archiveDate;
}

export default getArchiveDate;