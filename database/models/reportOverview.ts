const {Model} = require('sequelize')
import {ReportOverviewType} from '../../types/reportOverview'

module.exports = (sequelize: any, DataTypes: any) => {
    class ReportOverview extends Model<ReportOverviewType> implements ReportOverviewType {
        id!: string
        date!: Date
        car_id!: string
        technician_id!: string

        static associate(models: any) {
            ReportOverview.hasMany(models.Report, {
                foreignKey: 'overview_id'
            })
            ReportOverview.belongsTo(models.Car, {
                foreignKey: 'car_id'
            })
            ReportOverview.belongsTo(models.Technician, {
                foreignKey: 'technician_id'
            })
        }
    }

    ReportOverview.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE
        },
        car_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Car',
                key: 'id'
            }
        },
        technician_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Technician',
                key: 'person_id'
            }
        },
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'ReportOverview'
    })

    return ReportOverview
};