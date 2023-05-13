import { Sequelize, Model, DataTypes } from 'sequelize';

export interface UserInfo {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    static initModel(connection: Sequelize) {
        User.init({
            id: {
                type: DataTypes.STRING(255),
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: new DataTypes.STRING(255),
                allowNull: false
            },
            email: {
                type: new DataTypes.STRING(255),
                allowNull: false
            },
            password: {
                type: new DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            tableName: 'user',
            sequelize: connection,
            freezeTableName: true,
            timestamps: true
        });
    }

    static initAssociations() {
        // define association here
    }
}