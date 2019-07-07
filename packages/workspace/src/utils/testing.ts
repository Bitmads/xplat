import { join } from 'path';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { Tree, Rule } from '@angular-devkit/schematics';

const testRunner = new SchematicTestRunner(
  '@nstudio/workspace',
  join(__dirname, '../../collection.json')
);

const migrationTestRunner = new SchematicTestRunner(
  '@nstudio/workspace/migrations',
  join(__dirname, '../../migrations.json')
);

export function runSchematic(schematicName: string, options: any, tree: Tree) {
  return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}

export function runSchematicSync(schematicName: string, options: any, tree: Tree) {
  return testRunner.runSchematic(schematicName, options, tree);
}

export function callRule(rule: Rule, tree: Tree) {
  return testRunner.callRule(rule, tree).toPromise();
}

export function runMigration(migrationName: string, options: any, tree: Tree) {
  return migrationTestRunner
    .runSchematicAsync(migrationName, options, tree)
    .toPromise();
}