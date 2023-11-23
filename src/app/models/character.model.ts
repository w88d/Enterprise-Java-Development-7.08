export class Character {
    constructor( 
        private _id: number,
         private _name: string, 
         private _occupation: string,
          private _debt: boolean,
          private _weapon: string,
          showDetails?: boolean,
        )
        {

        }
    public get weapon(): string {
        return this._weapon;
    }
    public set weapon(value: string) {
        this._weapon = value;
    }
    public get debt(): boolean {
        return this._debt;
    }
    public set debt(value: boolean) {
        this._debt = value;
    }
    public get occupation(): string {
        return this._occupation;
    }
    public set occupation(value: string) {
        this._occupation = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
        }