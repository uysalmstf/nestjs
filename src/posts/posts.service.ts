import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: any, userId: string): Promise<Post> {
    const createdPost = new this.postModel({ ...createPostDto, user: userId });
    return createdPost.save();
  }
}