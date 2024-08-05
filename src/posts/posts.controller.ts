import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from 'src/user-auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createPostDto: any, @Request() req) {
    return this.postsService.create(createPostDto, req.user.userId);
  }
}