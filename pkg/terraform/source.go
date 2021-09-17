package terraform

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
)

type Source struct {
	raw string
	dir string
}

func NewSource(raw string) (*Source, error) {
	dir, err := ioutil.TempDir("", "selfserve-*")
	if err != nil {
		return nil, fmt.Errorf("failed to create dir for terraform execution: %w", err)
	}

	main := filepath.Join(dir, "main.tf")
	if err := ioutil.WriteFile(main, []byte(raw), 0666); err != nil {
		return nil, fmt.Errorf("failed write main.go for terraform execution: %w", err)
	}

	return &Source{
		raw: raw,
		dir: dir,
	}, nil
}

func (i *Source) Cleanup() {
	os.RemoveAll(i.dir)
}
