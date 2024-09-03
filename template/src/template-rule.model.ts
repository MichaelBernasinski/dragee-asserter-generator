import { Rule, type Dragee, type RuleResult } from "@dragee-io/asserter-type";

export class TemplateRule extends Rule {
    constructor(label: string, handler: (dragees: Dragee[]) => RuleResult[]) {
        super(label, handler);
    }
}