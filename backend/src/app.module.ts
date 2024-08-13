import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ResumeService } from './resume/resume.service';
import { ResumeController } from './resume/resume.controller';

@Module({
  imports: [],
  controllers: [AppController, ResumeController],
  providers: [ResumeService],
})
export class AppModule {}
