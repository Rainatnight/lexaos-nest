import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Folder, FolderDocument } from './schemas/folders.schema';

@Injectable()
export class FoldersService {
  constructor(
    @InjectModel(Folder.name)
    private readonly folderModel: Model<FolderDocument>,
  ) {}

  async getFolders(userId: string) {
    // Берём все папки пользователя, исключая служебные поля
    const items = await this.folderModel
      .find({ userId }, { __v: 0, userId: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    return items.map(({ _id, ...rest }) => ({
      id: _id,
      ...rest,
    }));
  }
}
