export class Address {

	constructor(private_street: string, private_number: number, private_floor: number, private_letter: string, private_zipCode: number, private_village: string, private_province: string) { }

	set street(street: string)
	{
		this._street = street;
	}

	set number(number: number)
	{
		this._number = number;
	}

	set floor(floor: number)
	{
		this._floor = floor;
	}

	set letter(letter: string)
	{
		this._letter = letter;
	}

	set zipCode(zipCode: number)
	{
		this._zipCode = zipCode;
	}

	set village(village: string)
	{
		this._village = village;
	}

	set province(province: string)
	{
		this._province = province;
	}

	get street(): string
	{
		return this._street;
	}

	get number(): number
	{
		return this._number;
	}

	get floor(): number
	{
		return this._floor;
	}

	get letter(): string
	{
		return this._letter;
	}
	get zipCode(): number
	{
		return this._zipCode;
	}
	get village(): string
	{
		return this._village;
	}
	get province(): string
	{
		return this._province;
	}
	showAddress(): string {
		let address: string = ` ${this._street}, ${this._number} ${this._floor}º${this._letter}
						${this._zipCode} ${this._village} (${this._province})`;
		return address;
	}
}