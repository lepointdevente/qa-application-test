import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ResumeService {
  private resumesDirectory = path.join(__dirname, '../../datas/resumes');

  getResumeFileName(id: number): string {
    return path.join(this.resumesDirectory, `${id}.json`);
  }
  
  listResumes(): string[] {
    return fs.readdirSync(this.resumesDirectory).map(file => path.basename(file, '.json'));
  }

  getResume(id: number): string {
    const filePath = this.getResumeFileName(id);
    console.log(filePath);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
    throw new Error('Resume not found');
  }

  validateResume(id: number): void {
    const filePath = this.getResumeFileName(id);
    if (fs.existsSync(filePath)) {
      const resume = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      resume.validated = true;
      fs.writeFileSync(filePath, JSON.stringify(resume, null, 2));
    } else {
      throw new Error('Resume not found');
    }
  }
}