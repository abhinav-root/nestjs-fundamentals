import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAllSongs() {
    return this.songsService.findAll();
  }

  @Post()
  create() {
    return this.songsService.create('Animals by Martix Garrix');
  }

  @Get(':id')
  findOne(): string {
    return 'fetch song based on id';
  }

  @Put(':id')
  update() {
    return 'Update song by id';
  }

  @Delete(':id')
  delete() {
    return 'delete song by id';
  }
}
