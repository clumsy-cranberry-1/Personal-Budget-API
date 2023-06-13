const fetchEnvelopes = (data) => {
    return data;
};

const generateID = (data) => {
    return (data[data.length - 1]["id"] + 1);
};

const findByID = (data, id) => {
    let i = data.findIndex((element) => element["id"] === id);
    return data[i];
};

module.exports = {
    fetchEnvelopes,
    generateID,
    findByID    
};