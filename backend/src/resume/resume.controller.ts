import { Controller, Get, Param, Post } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  listResumes(): string[] {
    return this.resumeService.listResumes();
  }

  @Get(':id')
  getResume(@Param('id') id: number): string {
    return this.resumeService.getResume(id);
  }

  @Post(':id/validate')
  validateResume(@Param('id') id: number): void {
    this.resumeService.validateResume(id);
  }
}