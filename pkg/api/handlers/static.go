package handlers

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

// StaticHandler handles web requests
type staticHandler struct {
	Contents map[string]io.ReadSeeker
}

// StaticHandler creates a new web handler
func StaticHandler(path string) *staticHandler {
	dirs := []string{
		"",
		"/static/css",
		"/static/js",
	}

	contents := map[string]io.ReadSeeker{}

	for _, dir := range dirs {
		files, err := ioutil.ReadDir(fmt.Sprintf("%s%s", path, dir))
		if err != nil {
			if !os.IsNotExist(err) {
				panic(err)
			}
		}

		for _, file := range files {
			if file.IsDir() {
				continue
			}
			f, err := os.Open(fmt.Sprintf("%s%s/%s", path, dir, file.Name()))
			if err != nil {
				panic(err)
			}
			// Copy to memory, and create new reader to avoid too many fs calls
			defer f.Close()
			b, err := ioutil.ReadAll(f)
			contents[fmt.Sprintf("%s/%s", dir, file.Name())] = bytes.NewReader(b)
		}
	}

	return &staticHandler{
		Contents: contents,
	}
}

func (h *staticHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if content, ok := h.Contents[r.URL.Path]; ok {
		http.ServeContent(w, r, filepath.Base(r.URL.Path), time.Time{}, content)
		return
	}
	if content, ok := h.Contents["/index.html"]; ok {
		http.ServeContent(w, r, "/index.html", time.Time{}, content)
		return
	}

	http.NotFoundHandler().ServeHTTP(w, r)
}
