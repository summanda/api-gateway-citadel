import Joi from 'joi';
import { Logger } from '../../Utility/Logger';

const getBills = ((req: any, res: any) => {
    res.status(200).send([
        { bid: '1', name: 'Bill 1' },
        { bid: '2', name: 'Bill 2' },
        { bid: '3', name: 'Bill 3' }
    ]
    );
});

const getBill = ((req: any, res: any) => {
    res.status(200).send(
        { bid: '1', name: 'Bill 1' }
    );
});

const createBill = (async (req: any, res: any) => {
    try {
        const schema = Joi.object({
            billName: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            billDetails: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9 ]{3,30}$')),
            billYear: Joi.number()
                .integer()
                .min(2020)
                .max(2023),
            billCreatedBy: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        });
        await schema.validateAsync(req.body);

        res.status(200).send(
            { message: 'Bill added' }
        );
    } catch (err) {
        Logger.info(`This resource doesn't exists - ${err}`);
        res.status(500).send(
            err
        );
    }
});

export {
    getBills,
    getBill,
    createBill
};