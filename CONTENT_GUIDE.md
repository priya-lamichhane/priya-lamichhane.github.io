# Quick Content Editing Guide

This guide will help you update your CV website content without any coding knowledge.

## 📍 Where to Edit

**File Location:** `src/data/content.json`

Open this file in any text editor (Notepad, TextEdit, VS Code, etc.)

## ✏️ How to Edit

1. Find the section you want to update
2. Change the text between the quotation marks `""`
3. Save the file
4. Refresh your browser to see changes

## 📋 Common Edits

### Update Your Email
```json
"email": "newemail@example.com"
```

### Update Your Phone Number
```json
"phone": "Your New Phone Number"
```

### Update LinkedIn URL
```json
"linkedin": "https://linkedin.com/in/yourprofile"
```

### Add a New Job
Find the `"workExperience"` section and add a new entry:
```json
{
  "title": "Your Job Title",
  "organization": "Company Name",
  "period": "Jan 2025 – Current",
  "location": "City, Country",
  "responsibilities": [
    "What you did in this role",
    "Another responsibility",
    "And another one"
  ]
}
```

**Important:** Don't forget the comma `,` between entries!

### Add a New Publication
```json
{
  "title": "Your Paper Title",
  "platform": "Where it was published"
}
```

### Update Skills
Find `"technical"` under `"skills"`:
```json
"technical": ["Python", "Excel", "New Skill Here"]
```

### Add a Language
```json
{
  "language": "Hindi",
  "proficiency": "Fluent"
}
```

## 🖼️ Update Profile Picture

1. Save your photo as `profile.jpg`
2. Place it in: `src/assets/images/`
3. Recommended: 400x400 pixels, under 500KB

## ⚠️ Important Rules

1. **Keep quotation marks:** Always keep text in `"quotes"`
2. **Commas matter:** Add commas `,` between list items
3. **Brackets:** 
   - `[]` for lists
   - `{}` for objects/entries
4. **Don't change the keys:** Only change the values
   - ✅ Change: `"name": "New Name"`
   - ❌ Don't change: `"name"` itself

## 🔧 JSON Syntax Quick Reference

```json
{
  "key": "value",           ← Text value
  "number": 123,            ← Number (no quotes)
  "list": [                 ← List starts with [
    "item 1",
    "item 2",
    "item 3"                ← Last item: no comma
  ],                        ← List ends with ]
  "object": {               ← Object starts with {
    "nested": "value"
  }                         ← Object ends with }
}
```

## 🆘 Common Mistakes

### Missing Comma
❌ Wrong:
```json
"item1"
"item2"
```

✅ Correct:
```json
"item1",
"item2"
```

### Extra Comma
❌ Wrong:
```json
"item1",
"item2",
```

✅ Correct:
```json
"item1",
"item2"
```

### Missing Quotes
❌ Wrong:
```json
"name": John Doe
```

✅ Correct:
```json
"name": "John Doe"
```

## 🧪 Testing Your Changes

1. Save the `content.json` file
2. If the dev server is running (`npm run dev`), the page will auto-reload
3. Check your browser - changes should appear immediately
4. If you see errors, check for missing commas or quotes

## 🔍 Validation Tool

To check if your JSON is valid:
1. Copy your entire `content.json` content
2. Go to: https://jsonlint.com/
3. Paste and click "Validate JSON"
4. Fix any errors it shows

## 💡 Tips

- Make small changes and test frequently
- Keep a backup copy before major edits
- Use a JSON-aware editor like VS Code for syntax highlighting
- When in doubt, compare with the original structure

## 📞 Need Help?

If something breaks:
1. Check the browser console (F12) for errors
2. Validate your JSON at jsonlint.com
3. Compare with the original file structure
4. Restore from backup if needed

---

**Remember:** You're only editing text and values. The structure (brackets, braces, quotes) should stay the same!

