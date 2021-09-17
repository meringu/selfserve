package terraform

import (
	"fmt"
	"os/exec"
)

func (s *Source) Init(backend bool) error {
	cmd := exec.Command("terraform", "init", fmt.Sprintf("-backend=%t", backend))
	cmd.Dir = s.dir
	out, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("terraform init failed: %w: %s", err, out)
	}

	return nil
}
