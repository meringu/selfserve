package terraform

import (
	"fmt"
	"os/exec"

	tfjson "github.com/hashicorp/terraform-json"
)

func (s *Source) Validate() (*tfjson.ValidateOutput, error) {
	cmd := exec.Command("terraform", "validate", "-no-color", "-json")
	cmd.Dir = s.dir
	out, err := cmd.CombinedOutput()
	if err != nil {
		switch err.(type) {
		case *exec.ExitError:
			break
		default:
			return nil, err
		}
	}

	val := &tfjson.ValidateOutput{}
	err = val.UnmarshalJSON(out)
	if err != nil {
		return nil, fmt.Errorf("terraform validate invalid output: %w", err)
	}
	return val, nil
}
