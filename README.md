# Week 5

**NOTE:** Added the steps we implemented in the presentation in [Docs/Authentication](./docs/add-authentication.md) (Reading)
- Do a reading of the steps and of the extra materials added  

## Setting Up 

- Merge the MR with the assignment from the previous week
- Continue from your repository `main` branch

## Assignment

- Get up-to-date with the authentication and users
  - Have the Users module implemented
  - Have the authentication implemented
- Create an answer model
```typescript
export class AnswerModel {
  id?: string;    
  content: string;
  rating?: number;
  creationDate: Date;
}
```
- Create some DTO's for `CreateAnswer` and `UpdateAnswer` similar in nature to how the `Question` was implemented
  - Annotate them with Swagger descriptions
- Expose in the `question-management.controller` endpoints for `Delete`, `Create`, and `Update`
  - It should be under `question-management/answers`
- Annotate the `question-management.controller` with the `UseGuards(JwtAuthGuard)`
- Test the application that it works


