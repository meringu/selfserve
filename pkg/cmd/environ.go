package cmd

import (
	"os"
	"strconv"
)

// EnvironOr Returns the value of the environment variable, or the default value if not set
func EnvironOr(environmentVariable, defaultValue string) string {
	val := os.Getenv(environmentVariable)
	if val == "" {
		return defaultValue
	}
	return val
}

// EnvironIntOr Returns the value of the environment variable as an in if it can be cast, or the default value if not set
func EnvironIntOr(environmentVariable string, defaultValue int) int {
	val := os.Getenv(environmentVariable)
	i, err := strconv.Atoi(val)
	if err != nil || val == "" {
		return defaultValue
	}
	return i
}

// EnvironInt64Or Returns the value of the environment variable as an in if it can be cast, or the default value if not set
func EnvironInt64Or(environmentVariable string, defaultValue int64) int64 {
	val := os.Getenv(environmentVariable)
	i, err := strconv.ParseInt(val, 10, 64)
	if err != nil || val == "" {
		return defaultValue
	}
	return i
}
