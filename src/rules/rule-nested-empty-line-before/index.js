import {
  ruleMessages
} from "../../utils"

import { checkRuleEmptyLineBefore } from "../rule-non-nested-empty-line-before"

export const ruleName = "rule-nested-empty-line-before"

export const messages = ruleMessages(ruleName, {
  expected: "Expected empty line before nested rule",
  rejected: "Unexpected empty line before nested rule",
})

/**
 * @param {"always"|"never"|"always-multi-line"|"never-multi-line"} expectation
 */
export default function (expectation) {
  return (root, result) => {
    root.eachRule(rule => {

      // Only attend to nested rule sets
      if (rule.parent === root) { return }

      checkRuleEmptyLineBefore(rule, expectation, result, messages)
    })
  }
}