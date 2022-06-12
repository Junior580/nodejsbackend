const User = require("../models/Model");

exports.get = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
        return res.status(422).json({ erro: "usuario não encontrado" });
    } else {
        return res.status(200).json(user);
    }
};

exports.post = async (req, res) => {
    const { name, email, age, approved } = req.body;
    if (!name || !email || !age || !approved) {
        res.status(404).json({ msg: "Favor preencher todos os campos." });
    }
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        return res.status(422).json({ msg: "Por favor utilize outro email" });
    }
    const user = new User({ name, email, age, approved });

    try {
        await user.save();
        res.status(201).json({ msg: "Dados salvos no db." });
    } catch (err) {
        res.status(422).json({ msg: "não foi possivel salvar no db." + err });
    }
};
