import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_SOURCE_FILE = path.join(__dirname, '..', 'content.json');
const PUBLIC_DATA_FILE = path.join(__dirname, '..', 'public', 'data.json');

// Define the expected structure for a project object for validation
const projectSchema = {
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  status: { type: 'string', required: true, enum: ['in-progress', 'completed'] },
  currentlyWorking: { type: 'boolean', required: false },
  lastCommit: { type: 'string', required: false }, // Assuming ISO date string
  technologies: { type: 'array', required: true, items: { type: 'string' } },
  links: {
    type: 'object',
    required: true,
    properties: {
      live: { type: 'string', required: false }, // Assuming URL
      github: { type: 'string', required: false } // Assuming URL
    }
  },
  image: { type: 'string', required: false }, // Assuming path
  jewelSlots: {
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        jewel: { type: 'string', required: true },
        slotNumber: { type: 'number', required: true }
      }
    }
  }
};

function validateProject(project) {
  for (const key in projectSchema) {
    const schema = projectSchema[key];
    const value = project[key];

    if (schema.required && (value === undefined || value === null)) {
      return `Missing required field: '${key}'`;
    }

    if (value !== undefined && value !== null) {
      if (schema.type === 'string' && typeof value !== 'string') {
        return `Field '${key}' must be a string`;
      }
      if (schema.type === 'number' && typeof value !== 'number') {
        return `Field '${key}' must be a number`;
      }
      if (schema.type === 'boolean' && typeof value !== 'boolean') {
        return `Field '${key}' must be a boolean`;
      }
      if (schema.type === 'array' && !Array.isArray(value)) {
        return `Field '${key}' must be an array`;
      }
      if (schema.type === 'object' && (typeof value !== 'object' || Array.isArray(value))) {
        return `Field '${key}' must be an object`;
      }
      if (schema.enum && !schema.enum.includes(value)) {
        return `Field '${key}' must be one of: ${schema.enum.join(', ')}`;
      }

      // Deeper validation for nested objects/arrays
      if (schema.type === 'array' && schema.items && Array.isArray(value)) {
        for (const item of value) {
          if (schema.items.type === 'object') {
            // Assuming simple object validation for now, can be extended
            for (const itemKey in schema.items.properties) {
              const itemSchema = schema.items.properties[itemKey];
              const itemValue = item[itemKey];
              if (itemSchema.required && (itemValue === undefined || itemValue === null)) {
                return `Missing required field in '${key}' array item: '${itemKey}'`;
              }
              if (itemValue !== undefined && itemValue !== null && typeof itemValue !== itemSchema.type) {
                return `Field '${itemKey}' in '${key}' array item must be a ${itemSchema.type}`;
              }
            }
          } else if (typeof item !== schema.items.type) {
            return `All items in '${key}' array must be of type ${schema.items.type}`;
          }
        }
      }
      if (schema.type === 'object' && schema.properties && typeof value === 'object' && !Array.isArray(value)) {
        for (const propKey in schema.properties) {
          const propSchema = schema.properties[propKey];
          const propValue = value[propKey];
          if (propSchema.required && (propValue === undefined || propValue === null)) {
            return `Missing required field in '${key}' object: '${propKey}'`;
          }
          if (propValue !== undefined && propValue !== null && typeof propValue !== propSchema.type) {
            return `Field '${propKey}' in '${key}' object must be a ${propSchema.type}`;
          }
        }
      }
    }
  }
  return null; // No validation errors
}

function updateContent() {
  console.log('Starting content update...');

  if (!fs.existsSync(CONTENT_SOURCE_FILE)) {
    console.error(`Error: Content source file not found at ${CONTENT_SOURCE_FILE}`);
    console.error('Please create a content.json file based on content.example.json');
    process.exit(1);
  }

  try {
    const sourceContent = JSON.parse(fs.readFileSync(CONTENT_SOURCE_FILE, 'utf8'));
    let publicData = JSON.parse(fs.readFileSync(PUBLIC_DATA_FILE, 'utf8'));

    if (!sourceContent.projects || !Array.isArray(sourceContent.projects)) {
      console.error('Error: content.json must contain a "projects" array.');
      process.exit(1);
    }

    // Validate each project
    for (const project of sourceContent.projects) {
      const validationError = validateProject(project);
      if (validationError) {
        console.error(`Validation Error in content.json for project '${project.title || 'Untitled'}': ${validationError}`);
        process.exit(1);
      }
    }

    // Update only the projects section of publicData
    publicData.projects = sourceContent.projects;

    fs.writeFileSync(PUBLIC_DATA_FILE, JSON.stringify(publicData, null, 2), 'utf8');
    console.log('Content updated successfully!');
    console.log(`Projects data from ${CONTENT_SOURCE_FILE} written to ${PUBLIC_DATA_FILE}`);

  } catch (error) {
    console.error('An error occurred during content update:', error.message);
    process.exit(1);
  }
}

updateContent();
