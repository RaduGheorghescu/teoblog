import { Moment } from 'moment';
import { IUser } from 'app/core/user/user.model';
import { ICategory } from 'app/shared/model//category.model';
import { ITag } from 'app/shared/model//tag.model';

export interface IEntry {
    id?: number;
    title?: string;
    content?: any;
    date?: Moment;
    user?: IUser;
    category?: ICategory;
    tags?: ITag[];
}

export class Entry implements IEntry {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: Moment,
        public user?: IUser,
        public category?: ICategory,
        public tags?: ITag[]
    ) {}
}
