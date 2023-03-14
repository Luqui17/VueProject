const {Service: ServiceModel} = require("../models/Nfe");

const serviceController = {

    create: async(req,resp)=>{
        try {
            
            const service = {
                CnpjEmitente: req.body.CnpjEmitente,
                RzSocialEmitente:req.body.RzSocialEmitente,
                CnpjDestinatario: req.body.CnpjDestinatario,
                RzSocialDestinatario:req.body.RzSocialDestinatario,
                XmlKey:req.body.XmlKey,
                Value:req.body.Value,
                xmlNumber:req.body.xmlNumber
            };
            const response = await ServiceModel.create(service);

            resp.status(201).json({response,msg: "Serviço criado com sucesso! "});

        } catch (error) {
            console.log(error)
        }
    }
    
};

module.exports = serviceController;

