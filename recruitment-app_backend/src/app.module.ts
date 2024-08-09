import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResumeService } from './resume/resume.service';
import { ResumeController } from './resume/resume.controller';

@Module({
  imports: [],
  controllers: [AppController, ResumeController],
  providers: [AppService, ResumeService],
})
export class AppModule {}
