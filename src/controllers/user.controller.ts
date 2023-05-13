import { NextFunction, Request, Response } from "express";
import { User, UserInfo } from "../models/user.model";
import { HttpStatus } from "../utils/http-status";
// import { HttpStatus } from "../utils/http-status";

import coinbaseCommerce from 'coinbase-commerce-node';
const client = coinbaseCommerce.Client;
const charge = coinbaseCommerce.resources.Charge;

client.init('o7dBfUqbuQMRQzMW');

export class UserController extends HttpStatus {
    public getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users: UserInfo[] = await User.findAll();
            if(!users.length) return this.sendBadRequestResponse(res, "No users found.");
            
            this.sendOkResponse("Users fetched successfully.", res, users);
        } catch (err) {
            if(err instanceof Error) {
                this.sendBadRequestResponse(res, err.message);
            }
        }
    };

    public payment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { amount, currency, address, memo } = req.body;
            const chargeData: any = {
                name: 'Product Name',
                description: 'memo',
                pricing_type: 'fixed_price',
                local_price: {
                  amount: '50',
                  currency: 'USD'
                },
                metadata: {
                  product_id: 'PRODUCT_ID'
                }
            };

            const createCharge = await charge.create(chargeData);
            res.json({ url: createCharge.hosted_url });
        } catch (err) {
            if(err instanceof Error) {
                this.sendBadRequestResponse(res, err.message);
            }
        }
    };

    public notification = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { event, data } = req.body;
            if (event === 'charge:confirmed') {
                // Update your database or perform other actions as needed
                console.log("Payment confirmed");
            }
        } catch(err) {
            if(err instanceof Error) {
                this.sendBadRequestResponse(res, err.message);
            }
        }
    };
}