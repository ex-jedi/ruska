<?php
    class PerchTemplateFilter_space extends PerchTemplateFilter {
        public function filterAfterProcessing($value, $valueIsMarkup = false) {
            if ($this->Tag->type == 'price') {
            return str_replace(' ', '', $value);
          }
        }
    }

    PerchSystem::register_template_filter('space', 'PerchTemplateFilter_space');