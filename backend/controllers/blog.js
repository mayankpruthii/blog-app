exports.time = (req, res) => {
    return res.json({ time: Date().toString() });
};
