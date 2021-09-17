package terraform

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestValidateValid(t *testing.T) {
	s, err := NewSource(`
variable test {}
`)
	assert.Nil(t, err)
	defer s.Cleanup()

	out, err := s.Validate()
	assert.Nil(t, err)

	assert.True(t, out.Valid)
}

func TestValidateInvalid(t *testing.T) {
	s, err := NewSource(`
variable $test {}
`)
	assert.Nil(t, err)
	defer s.Cleanup()

	out, err := s.Validate()
	assert.Nil(t, err)

	assert.False(t, out.Valid)
}
