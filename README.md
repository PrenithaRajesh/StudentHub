# 🚀 Team Development Guidelines

## 📌 Commit Naming Convention
To maintain a clean and structured commit history, please follow the commit message format below:

### **Format:**
```
[Category] Short description 
```

### **Commit Categories:**
| Category  | Purpose |
|-----------|---------|
| `angular`    | Frontend update |
| `dotnet`     | Backend update |
| `mssql`   | Database update |
| `refactor`| Code improvements without changing functionality |
| `style`   | Code style changes (e.g., indentation, whitespace) |
| `docs` | .md files

---

## ✅ Commit Rules
To ensure consistency and avoid conflicts, please follow these commit rules:

1. **Commit to Your Own Branch**
   - Each developer should only commit to their designated branch: `dev-<yourname>`

2. **Use Meaningful Messages**
   - Avoid generic commit messages like `Updated code`, `Fixed bugs`
   - Provide enough context about the change

3. **Keep Commits Small & Focused**
   - A single commit should ideally address one issue or feature
   - Avoid bundling multiple unrelated changes into one commit

4. **Use Pull Requests for Merging to `master`**
   - All merges to `master` must go through a **Pull Request (PR)**
   - PRs require approval from designated reviewers

5. **No Direct Commits to `master`**
   - Direct commits to `master` are restricted
   - Use feature branches and PRs to integrate changes

6. **Write Clear Descriptions for PRs**
   - Include what changed, why, and any dependencies

---

## 🔄 Workflow Summary
1. Work on your feature in your `dev-<yourname>` branch
2. Follow the commit naming convention & commit rules
3. Push changes to your branch (`git push origin dev-<yourname>`)
4. Create a Pull Request to merge into `master`
5. PR must be reviewed & approved before merging

By following these guidelines, we ensure a structured and efficient development process. Happy coding! 

