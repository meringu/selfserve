// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type CreateModule struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type CreateModuleVersion struct {
	Module  int    `json:"module"`
	Version string `json:"version"`
	Source  string `json:"source"`
}

type DeleteModule struct {
	ID int `json:"id"`
}

type DeleteModuleVersion struct {
	ID int `json:"id"`
}

type UpdateModule struct {
	ID          int     `json:"id"`
	Name        *string `json:"name"`
	Description *string `json:"description"`
}

type UpdateModuleVersion struct {
	ID      int     `json:"id"`
	Version *string `json:"version"`
	Source  *string `json:"source"`
}